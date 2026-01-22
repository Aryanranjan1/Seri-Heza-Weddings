'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  weddingDate: z.string({ required_error: 'A date is required.' }).min(1, 'A date is required.'),
  venue: z.string().optional(),
  pax: z.string().min(1, { message: "Please estimate guest count." }),
  interest: z.string({ required_error: 'Please select an interest.' }),
});

const ConversionSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      weddingDate: '',
      venue: '',
      pax: '',
      interest: '',
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  const inputStyles = "w-full py-2.5 border-0 border-b border-gray-300 font-headline text-lg text-gray-800 bg-transparent outline-none transition-all rounded-none focus:border-muted-gold placeholder:text-gray-400 placeholder:font-sans placeholder:text-base placeholder:tracking-wider";

  return (
    <section id="contact" className="flex flex-col lg:flex-row w-full min-h-[700px]">
      <div className="lg:w-2/5 bg-[#1C1C1C] text-white p-12 lg:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width=\'40\'%20height=\'40\'%20viewBox=\'0%200%2040%2040\'%20xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath%20d=\'M20%2020.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H22v20h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h-2v-2z\'%20fill=\'%23ffffff\'%20fill-opacity=\'1\'%20fill-rule=\'evenodd\'/%3E%3C/svg%3E')]"></div>
        <div className="relative z-10 w-full max-w-md">
          <h3 className="font-headline text-5xl font-normal mb-6 text-muted-gold tracking-tight">Prefer to chat?</h3>
          <p className="font-body text-base font-light opacity-70 mb-12 leading-relaxed tracking-wider max-w-sm mx-auto">
            Instant responses for quick questions & consultations.
          </p>
          <a 
            href="https://wa.me/60169772878" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#B88A44] via-[#E5D1A5] to-[#B88A44] bg-[size:200%_auto] text-[#1C1C1C] py-5 px-11 rounded-sm no-underline font-semibold text-xs tracking-[0.15em] uppercase inline-flex items-center gap-4 transition-all duration-500 ease-in-out shadow-[0_5px_15px_rgba(184,138,68,0.3)] hover:bg-right hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(184,138,68,0.5)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.637 3.891 1.685 5.73l-1.124 4.103 3.928-1.532z"/></svg>
            WhatsApp Us Now
          </a>
          <div className="mt-16 inline-block border border-muted-gold/30 py-8 px-16 relative">
            <span className="block text-xs uppercase tracking-[0.25em] text-muted-gold mb-2.5">Operating Hours</span>
            <strong className="font-headline text-lg text-white font-normal">10am - 7pm daily</strong>
          </div>
        </div>
      </div>
      
      <div className="lg:w-3/5 bg-white p-12 lg:p-24 flex flex-col justify-center">
        <div className="max-w-3xl w-full mx-auto">
          <h3 className="font-headline text-4xl text-gray-900 mb-12">Structured Inquiry</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-14">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-3 block">Name</FormLabel>
                      <FormControl>
                        <input type="text" placeholder="Your Name" {...field} className={inputStyles} />
                      </FormControl>
                      <FormMessage className="absolute -bottom-6 text-xs"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-3 block">Phone</FormLabel>
                      <FormControl>
                        <input type="tel" placeholder="+60..." {...field} className={inputStyles} />
                      </FormControl>
                      <FormMessage className="absolute -bottom-6 text-xs"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weddingDate"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-3 block">Wedding Date</FormLabel>
                      <FormControl>
                        <input type="date" {...field} className={cn(inputStyles, 'text-gray-500')} />
                      </FormControl>
                      <FormMessage className="absolute -bottom-6 text-xs"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="venue"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-3 block">Venue (If Any)</FormLabel>
                      <FormControl>
                        <input type="text" placeholder="Location" {...field} className={inputStyles} />
                      </FormControl>
                       <FormMessage className="absolute -bottom-6 text-xs"/>
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="pax"
                  render={({ field }) => (
                    <FormItem className="relative lg:col-span-2">
                      <FormLabel className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-3 block">Estimated Pax</FormLabel>
                      <FormControl>
                        <input type="number" placeholder="e.g. 500" {...field} className={inputStyles} />
                      </FormControl>
                      <FormMessage className="absolute -bottom-6 text-xs"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem className="relative lg:col-span-2">
                       <FormLabel className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-3 block">I'm interested in...</FormLabel>
                      <FormControl>
                        <select {...field} className={cn(inputStyles, "appearance-none bg-no-repeat bg-right bg-[url('data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'12\'%20height=\'12\'%20viewBox=\'0%200%2024%2024\'%3E%3Cpath%20fill=\'%23C5A059\'%20d=\'M0%207.33l2.829-2.83%209.175%209.339%209.167-9.339%202.829%202.83-11.996%2012.17z\'/%3E%3C/svg%3E')]")}>
                          <option value="" disabled>Select a service</option>
                          <option value="full">Full Wedding Planning</option>
                          <option value="decor">Pelamin &amp; Decor</option>
                          <option value="makeup">Bridal Makeup</option>
                          <option value="attire">Busana &amp; Attire</option>
                        </select>
                      </FormControl>
                      <FormMessage className="absolute -bottom-6 text-xs"/>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="mt-12 w-full bg-[#1C1C1C] text-white border border-[#1C1C1C] py-8 px-0 font-sans text-xs font-semibold tracking-[0.25em] uppercase rounded-none transition-all duration-400 ease-in-out hover:bg-transparent hover:text-[#1C1C1C]">
                Check Availability
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
