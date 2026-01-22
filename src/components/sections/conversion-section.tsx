'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { WhatsAppIcon } from '../icons/whatsapp-icon';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  weddingDate: z.date({ required_error: 'A date is required.' }),
  venue: z.string().optional(),
  pax: z.string().min(1, { message: "Please estimate guest count." }),
  interest: z.string({ required_error: 'Please select an interest.' }),
});

const ConversionSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-dark-maroon text-primary-foreground p-8 md:p-16 flex flex-col justify-center items-center text-center">
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">Prefer to chat?</h2>
        <p className="font-body text-lg text-white/80 mb-8 max-w-sm">
          Get an instant response from our team for quick questions and consultations.
        </p>
        <Button className="bg-whatsapp-green text-white rounded-full h-16 w-full max-w-xs text-lg font-bold hover:bg-whatsapp-green/90 transition-transform hover:scale-105">
          <WhatsAppIcon className="h-7 w-7 mr-3" />
          WhatsApp Us Now
        </Button>
        <p className="font-ui text-sm uppercase tracking-wide-ui mt-8 text-white/60">
          +60 16-977 2878
        </p>
        <p className="font-body text-sm mt-4 text-white/60">Operating Hours: 10am - 7pm daily</p>
        <div className="mt-8 border border-white/20 rounded-lg overflow-hidden w-full max-w-sm h-48">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.043519198642!2d101.52183361530206!3d3.083313997769185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d493a3f5761%3A0x1634d5ac889f029a!2sShah%20Alam%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1683050012345!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shah Alam Map"
          ></iframe>
        </div>
      </div>
      <div className="bg-background p-8 md:p-16 flex flex-col justify-center">
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-8">Structured Inquiry</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-ui uppercase tracking-wide-ui text-xs">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Full Name" {...field} className="h-12" />
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
                    <FormLabel className="font-ui uppercase tracking-wide-ui text-xs">Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 012-3456789" {...field} className="h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="weddingDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-ui uppercase tracking-wide-ui text-xs">Wedding Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full h-12 pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="venue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-ui uppercase tracking-wide-ui text-xs">Venue (if any)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. The Glasshouse" {...field} className="h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-ui uppercase tracking-wide-ui text-xs">Estimated Pax</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 500" {...field} className="h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-ui uppercase tracking-wide-ui text-xs">I'm interested in...</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="full">Full Wedding Planning</SelectItem>
                      <SelectItem value="decor">Pelamin &amp; Decor</SelectItem>
                      <SelectItem value="makeup">Bridal Makeup</SelectItem>
                      <SelectItem value="attire">Busana &amp; Attire</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full h-14 bg-foreground text-background rounded-full hover:bg-muted-gold hover:text-foreground font-ui uppercase tracking-wide-ui text-base">
              Check Availability
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ConversionSection;
