"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

function UserSettingsForm() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

    async function uploadToBlobStorage(file) {
        return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/upload?filename=${file.name}`,{
            method: 'POST',
            body: file
        })
    }

    const handleResumeChange = async(e) => {
        const file = e.target.files[0];
        const { url } = await uploadToBlobStorage(file);
        console.log(url, ' url of uploaded resume' );
        
    }
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="text-sm" htmlFor="name">Your Name</label>
            <Input placeholder="John Doe" {...register("name")} id="name" />
          </div>
          <div>
            <label className="text-sm" htmlFor="email">Your Email</label>
            <Input
              placeholder="user@site.com"
              {...register("email")}
              id="email"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="slug">Choose a Slug</label>
            <Input placeholder="/yourname" {...register("slug")} id="slug" />
          </div>
          <div>
            <label className="text-sm" htmlFor="bio">Your Bio</label>
            <Input
              placeholder="eg. I'm the best developer"
              {...register("bio")}
              id="bio"
            />
          </div>
          <div>
            <label className="text-sm">Resume</label>
            <label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-10 w-full flex justify-center items-center">Upload Resume</div>
                <input onChange={handleResumeChange} type="file" accept="application/pdf" hidden />
            </label>
          </div>
          <div>
            <label className="text-sm" htmlFor="salary">Your Expected Salary</label>
            <Input
              placeholder="eg. 1000000"
              {...register("salary")}
              id="salary"
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default UserSettingsForm;
