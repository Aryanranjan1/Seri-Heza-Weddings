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

  const inputStyles = "w-full py-2.5 border-0 border-b border-gray-200 font-serif text-lg text-gray-900 bg-transparent outline-none transition-all rounded-none focus:border-gray-900 placeholder:text-gray-300 placeholder:font-sans placeholder:text-sm";

  return (
    <section id="contact" className="flex flex-col lg:flex-row w-full min-h-[750px] bg-white">
      <div 
        className="flex-1 bg-cover bg-center min-h-[350px] lg:min-h-0 grayscale"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>

      <div className="flex-1 bg-white p-12 md:p-16 lg:p-24 flex flex-col justify-center">
        <h3 className="font-signature text-6xl md:text-7xl text-gray-900 mb-2 leading-none font-normal lg:-rotate-3 origin-left-center">Begin Your Journey</h3>
        <p className="text-sm text-gray-600 mb-14 leading-loose max-w-md mt-4 tracking-wider">
          Ready to plan the wedding of your dreams? Fill out the form below to check availability for your date. We look forward to creating magic with you.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 font-semibold mb-3 block">Your Name</FormLabel>
                    <FormControl>
                      <input type="text" placeholder="Bride / Groom" {...field} className={inputStyles} />
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
                    <FormLabel className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 font-semibold mb-3 block">Phone Number</FormLabel>
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
                    <FormLabel className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 font-semibold mb-3 block">Wedding Date</FormLabel>
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
                    <FormLabel className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 font-semibold mb-3 block">Venue (If Any)</FormLabel>
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
                  <FormItem className="relative md:col-span-2">
                    <FormLabel className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 font-semibold mb-3 block">Estimated Pax</FormLabel>
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
                  <FormItem className="relative md:col-span-2">
                     <FormLabel className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 font-semibold mb-3 block">I'm interested in...</FormLabel>
                    <FormControl>
                      <select {...field} className={cn(inputStyles, "appearance-none bg-no-repeat bg-right bg-[url('data:image/svg+xml,%3Csvg%20xmlns=\\'http://www.w3.org/2000/svg\\' %20width=\\'12\\' %20height=\\'12\\' %20viewBox=\\'0%200%2024%2024\\'%3E%3Cpath%20fill=\\'%23111111\\' %20d=\\'M0%207.33l2.829-2.83%209.175%209.339%209.167-9.339%202.829%202.83-11.996%2012.17z\\'/%3E%3C/svg%3E')]")}>
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
            <Button type="submit" className="mt-16 w-full bg-[#111] text-white border border-[#111] py-8 px-0 font-sans text-xs font-semibold tracking-[0.25em] uppercase rounded-none transition-all duration-400 ease-in-out hover:bg-white hover:text-[#111]">
              Check Availability
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ConversionSection;
