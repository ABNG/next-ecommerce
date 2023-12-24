"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import SignInForm from "./form/SignInForm";
import SignUpForm from "./form/SignUpForm";

type Props = { text: string; className?: string };

const SignInButton = ({ text, className }: Props) => {
  const [open, setOpen] = useState(false);
  const [signUpForm, setSignForm] = useState(false);

  const updateForm = () => {
    setSignForm((oldState) => !oldState);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{text}</Button>
        {/* <Button className={`bg-red-300 ${className}`}>{text}</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign {signUpForm ? "Up" : "In"}</DialogTitle>
          <DialogDescription>
            {signUpForm
              ? "Fill the Form"
              : "Enter your registered email and password"}
          </DialogDescription>
        </DialogHeader>
        {signUpForm ? (
          <SignUpForm
            onSignUpSuccess={(): void => {
              setSignForm(false);
            }}
          />
        ) : (
          <SignInForm
            onSignInSuccess={(): void => {
              setOpen(false);
            }}
          />
        )}
        <DialogFooter className="flex-col sm:flex-col">
          <Separator />
          <div className="flex items-center justify-end mt-6">
            <p className="text-gray-400 text-sm mr-6">
              {signUpForm ? "Already have account?" : "Don't have account?"}
            </p>
            <Button variant="secondary" onClick={updateForm}>
              Sign {signUpForm ? "In" : " Up"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignInButton;
