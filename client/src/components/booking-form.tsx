import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon, User, Phone, FileText, Clock, Loader2, Calendar } from "lucide-react";

import { useLanguage } from "@/lib/language-context";
import { apiRequest } from "@/lib/queryClient";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  trigger: React.ReactNode;
}

export function BookingForm({ trigger }: BookingFormProps) {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      serviceType: "",
      customerName: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("bookingSuccess"),
        description: t("bookingSuccessDesc"),
      });
      form.reset();
      setOpen(false);
    },
    onError: () => {
      toast({
        title: t("bookingError"),
        description: t("bookingErrorDesc"),
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: InsertBooking) {
    mutation.mutate(data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className={isRTL ? "text-right" : "text-left"}>
          <DialogTitle className={isRTL ? "font-cairo" : "font-poppins"}>
            {t("bookingTitle")}
          </DialogTitle>
          <DialogDescription className={isRTL ? "font-tajawal" : "font-inter"}>
            {t("bookingDescription")}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={isRTL ? "font-tajawal" : "font-inter"}>
                    {t("serviceTypeLabel")}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-service-type">
                        <SelectValue placeholder={t("selectService")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ac" data-testid="option-ac">
                        {t("acService")}
                      </SelectItem>
                      <SelectItem value="washing" data-testid="option-washing">
                        {t("washingService")}
                      </SelectItem>
                      <SelectItem value="fridge" data-testid="option-fridge">
                        {t("fridgeService")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={isRTL ? "font-tajawal" : "font-inter"}>
                    {t("customerNameLabel")}
                  </FormLabel>
                  <FormControl>
                    <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                      <User className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder={t("customerNamePlaceholder")}
                        {...field}
                        data-testid="input-customer-name"
                        className={isRTL ? "text-right" : "text-left"}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={isRTL ? "font-tajawal" : "font-inter"}>
                    {t("phoneLabel")}
                  </FormLabel>
                  <FormControl>
                    <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder={t("phonePlaceholder")}
                        {...field}
                        data-testid="input-phone"
                        dir="ltr"
                        className="text-left"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={isRTL ? "font-tajawal" : "font-inter"}>
                    {t("preferredDateLabel")}
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground",
                            isRTL && "flex-row-reverse text-right"
                          )}
                          data-testid="button-date-picker"
                        >
                          <CalendarIcon className="h-4 w-4" />
                          <span className="flex-1">
                            {field.value ? format(new Date(field.value), "PPP") : t("selectDate")}
                          </span>
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={isRTL ? "font-tajawal" : "font-inter"}>
                    {t("preferredTimeLabel")}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-preferred-time">
                        <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <SelectValue placeholder={t("selectTime")} />
                        </div>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="morning" data-testid="option-morning">
                        {t("morning")}
                      </SelectItem>
                      <SelectItem value="afternoon" data-testid="option-afternoon">
                        {t("afternoon")}
                      </SelectItem>
                      <SelectItem value="evening" data-testid="option-evening">
                        {t("evening")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={isRTL ? "font-tajawal" : "font-inter"}>
                    {t("notesLabel")}
                  </FormLabel>
                  <FormControl>
                    <div className={cn("flex gap-2", isRTL && "flex-row-reverse")}>
                      <FileText className="h-4 w-4 text-muted-foreground mt-2.5" />
                      <Textarea
                        placeholder={t("notesPlaceholder")}
                        className={cn("flex-1 resize-none", isRTL && "text-right")}
                        rows={3}
                        {...field}
                        value={field.value || ""}
                        data-testid="textarea-notes"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className={cn(
                "w-full gap-2 h-12 text-base font-semibold rounded-xl bg-blue-600 text-white",
                isRTL ? "font-cairo flex-row-reverse" : "font-inter"
              )}
              disabled={mutation.isPending}
              data-testid="button-submit-booking"
            >
              {mutation.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              <Calendar className="h-4 w-4" />
              {t("submitBooking")}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
