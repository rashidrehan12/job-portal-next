import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin, Search } from "lucide-react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
   <>
    <section className="flex flex-col gap-2 items-center justify-center px-4 h-[70vh] bg-black text-center">
      <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl tracking-tighter font-bold">Find Your Dream Job Today</h1>
      <p className="text-gray-200 text-lg">Discover thousands of opportunities and grow your career.</p>
      <div className="flex items-center gap-2 mt-5">
        <Input placeholder="Search for jobs.." className="bg-gray-100"/>
        <Button className="bg-gray-700" variant="">Search</Button>
      </div>  
    </section>

     <section className="h-screen sm:h-[50vh] w-full py-4 px-8 flex flex-col items-center justify-center gap-3 bg-zinc-200">
       <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center tracking-tighter">Featured Jobs</h2>
       <div className="w-full grid grid-cols-1 sm:grid-col2 lg:grid-cols-3 gap-6">
        {
            [
                { title: 'Product Manager', companyName: 'Google', location: 'New York, NY', jobUrl: '/apply/demo-job'},
                { title: 'Software Engineer', companyName: 'Microsoft', location: 'San Francisco, CA', jobUrl: '/apply/se'},
                { title: 'Data Analyst', companyName: 'Amazon', location: 'Seattle, WA', jobUrl: '/apply/da'},
            ].map((job)=> {
              return <Card className="pt-4">
                <CardContent>
                  <h3 className="text-lg font-medium">{job.title}</h3>
                  <h6 className="text-md">{job.companyName}</h6>
                  <p className="flex items-center gap-1 pt-4"> < MapPin size="16"/> {job.location}</p>
                </CardContent>
                <CardFooter>
                  <Link className="border border-gray-700 w-full px-4 py-2 rounded-lg text-center bg-gray-200/40"href={job.jobUrl}>Apply Now</Link>
                </CardFooter>
              </Card>
          })
      }
       </div>
     </section>
     <section className="bg-zinc-900 text-white h-auto flex flex-col items-start px-10 sm:px-20 py-20">
       <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center tracking-tighter">
        Join thousands of Job Seeker today!
       </h2>
       <p>Ready to start your journey with CareerConnect? Sign up for the newsletter to stay updated!</p>
       <div className="flex items-center gap-2 mt-5">
            <Input placeholder="Enter your email" className="bg-gray-100"/>
            <Button className="text-black" variant="outline">Subscribe</Button>
        </div>  
     </section>
     <section className="p-4 h-screen md:h-[50vh] w-full py-4 px-8 flex flex-col items-center justify-center gap-3"> 
       <h4 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center tracking-tighter">How It Works</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-8">
        {
          [
            { title: 'Search a Job', description: 'Browse through thousands of high quality jobs around the world', icon: Search },
            { title: 'Apply With Ease', description: 'With single click and auto profile import apply faster', icon: Search },
            { title: 'Grow in Career', description: 'Take your carrer to the next level with CareerConnect', icon: Briefcase }
          ].map((each)=> {
            return <div>
              <Card>
                <CardHeader>
                  <each.icon />
                </CardHeader>
                <CardContent>
                <h4>{each.title}</h4>
                  <p>{each.description}</p>
                </CardContent>
              </Card>
            </div>
          })
        }
      </div>
    </section>
   </>
  );
}
