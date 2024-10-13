"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 w-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section - Profile Pic */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white">
          <div className="relative w-24 h-24 mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSYk_W83N2xJNEfhep2ia56pzsUI1ucsPZg&s"
              alt="Avatar"
              className="w-full h-full rounded-full object-cover border-4 border-white"
            />
          </div>
          <h2 className="text-2xl font-bold">The Nick Sorawit</h2>
        </div>

        {/* Right Section - Profile Details */}
        <div className="p-8 bg-white">
          <div className="flex justify-center">
            <h3 className="text-xl font-semibold mb-6">Profile</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-600">
                Display Name
              </h4>
              <p className="text-gray-800">The Nick Sorawit</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-600">Email</h4>
              <p className="text-gray-800">example@gmail.com</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              className="bg-indigo-500 text-white hover:bg-indigo-600 flex items-center"
              onClick={() => router.push("/profile/edit")}
            >
              <span>Edit Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
