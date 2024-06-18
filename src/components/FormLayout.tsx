"use client";
interface FormLayoutProps {
  children: React.ReactNode
}

export default function FormLayout ({children}:FormLayoutProps) {
  return (
    <div className="flex justify-center pt-10">
      <div className="flex items-center flex-col w-5/12">
        {children}
       </div>
    </div>
  )
}
