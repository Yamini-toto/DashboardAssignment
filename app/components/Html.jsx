"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Html = ({formData, setFormData}) => {
  const [tempData, setTempData] = useState({ ...formData });
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTempData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(tempData);
    setOpen(false);
  };

  return (
    <div className='flex justify-between items-center px-4 py-2 flex-row gap-2'>
      <Image alt='image' src={'/html.png'} width={60} height={60} />
      <div className='flex flex-col text-black'>
        <h2 className=''>Hyper Text Markup Language</h2>
        <p className=''>Question: 08 | Duration: 15 mins | submitted on June 2025</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='primary' className="bg-blue-900 max-w-fit text-white">Update</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Scores</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rank" className="text-right">
                  Update Your Rank
                </Label>
                <Input
                  id="rank"
                  placeholder="rank"
                  value={tempData.rank}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="percentile" className="text-right">
                  Update Your Percentile
                </Label>
                <Input
                  id="percentile"
                  placeholder="percentage"
                  value={tempData.percentile}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="score" className="text-right">
                  Update Your Current Score (out of 15)
                </Label>
                <Input
                  id="score"
                  placeholder="score"
                  value={tempData.score}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Html