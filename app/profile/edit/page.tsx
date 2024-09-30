'use client'
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";

// Define Zod schemas for validation
const displayNameSchema = z.object({
  displayName: z.string().min(1, { message: "Display name must be at least 1 characters" }).max(32, { message: "Display name cannot exceed 32 characters" }),
});

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const passwordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password confirmation must be at least 8 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function ProfileEditingPage() {
  const [avatar, setAvatar] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSYk_W83N2xJNEfhep2ia56pzsUI1ucsPZg&s");

  const {
    register: registerDisplayName,
    handleSubmit: handleSubmitDisplayName,
    formState: { errors: displayNameErrors },
    reset: resetDisplayName,
  } = useForm({
    resolver: zodResolver(displayNameSchema),
  });

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: emailErrors },
    reset: resetEmail,
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
    reset: resetPassword,
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmitDisplayName = (data) => {
    console.log("Display Name updated:", data);
    resetDisplayName(); // Reset the display name form
  };

  const onSubmitEmail = (data) => {
    console.log("Email updated:", data);
    resetEmail(); // Reset the email form
  };

  const onSubmitPassword = (data) => {
    console.log("Password updated:", data);
    resetPassword(); // Reset the password form
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) { // Check if the file is an image
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      // Clean up the memory
      return () => URL.revokeObjectURL(imageUrl);
    } else {
      alert("Please select a valid image file."); // Alert if the file is not an image
    }
  };

  const handleImageDelete = () => {
    setAvatar(""); // Remove profile picture
  };

  return (
    <div className="flex justify-center items-center min-h-screen h-screen">
      <form className="grid grid-cols-2 w-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Section - Profile Pic */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white">
          <div className="relative w-24 h-24 mb-4">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-lg text-gray-500">No Image</span>
              </div>
            )}
          </div>
          <h2 className="text-2xl font-bold mb-4">The Nick Sorawit</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-2 text-white"
          />
          <Button
            type="button"
            onClick={handleImageDelete}
            className="bg-red-500 hover:bg-red-600"
          >
            Delete Image
          </Button>
        </div>

        {/* Right Section - Profile Details */}
        <CardContent className="p-8 bg-white space-y-8">

          <div className="flex justify-center">
            <h3 className="text-xl font-semibold">Edit Your Profile</h3>
          </div>
          {/* Change Display Name Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Change Display Name</h3>
            <Label htmlFor="displayName" className="text-sm font-semibold text-gray-600">
              Display Name
            </Label>
            <Input
              id="displayName"
              type="text"
              placeholder="New Display Name"
              {...registerDisplayName("displayName")}
            />
            {displayNameErrors.displayName && (
              <p className="text-red-500">{displayNameErrors.displayName.message}</p>
            )}
            <div className="flex justify-center m-2">
                <Button
                type="button"
                onClick={handleSubmitDisplayName(onSubmitDisplayName)}
                className="bg-indigo-500 text-white mt-2"
                >
                Change
                </Button>
                </div>
          </div>

          {/* Change Email Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Change Email</h3>
            <Label htmlFor="email" className="text-sm font-semibold text-gray-600">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="newExample@gmail.com"
              {...registerEmail("email")}
            />
            {emailErrors.email && <p className="text-red-500">{emailErrors.email.message}</p>}
            <div className="flex justify-center m-2">
                <Button
                type="button"
                onClick={handleSubmitEmail(onSubmitEmail)}
                className="bg-indigo-500 text-white mt-2"
                >
                Change
                </Button>
            </div>
          </div>

          {/* Change Password Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Change Password</h3>
            <Label htmlFor="password" className="text-sm font-semibold text-gray-600">
              New Password
            </Label>
            <Input
              id="password"
              type="password"
              {...registerPassword("password")}
            />
            {passwordErrors.password && <p className="text-red-500">{passwordErrors.password.message}</p>}

            <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-600 mt-2">
              Confirm New Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              {...registerPassword("confirmPassword")}
            />
            {passwordErrors.confirmPassword && (
              <p className="text-red-500">{passwordErrors.confirmPassword.message}</p>
            )}

            <div className="flex justify-center m-2">
                <Button
                type="button"
                onClick={handleSubmitPassword(onSubmitPassword)}
                className="bg-indigo-500 text-white mt-2"
                >
                Change
                </Button>
            </div>
          </div>
        </CardContent>
      </form>
    </div>
  );
}
