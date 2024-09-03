"use server";
import { Resend } from "resend";
import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message");
    const email = formData.get("email");
    const name = formData.get("name");
    const mobile = formData.get("mobile");

    if (!validateString(email, 500)) {
        return {
            error: "invalid email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "invalid message"
        }
    }
    if (!validateString(name, 200)) {
        return {
            error: "invalid name"
        }
    }
    if (!validateString(mobile, 20)) {
        return {
            error: "invalid mobile"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to:"mikulasdejvid@gmail.com",
            subject: "Message z webu proassist.sk",
            replyTo: email as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string, email: email as string, name: name as string, mobile: mobile as string
            }),
        })
    }
    catch(error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
    return {
        data
    };
  }