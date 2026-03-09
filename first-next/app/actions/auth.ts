"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
    console.log(formData)
    try {

        const email = formData.get("email");
        const password = formData.get("password");

        console.log("Email:", email);
        console.log("Password:", password);

        const response = await axios.get(
            `${API_URL}/users?email=${email}&password=${password}`
        );

        console.log("API DATA:", response.data);

        const user = response.data[0];

        if (!user) {
            throw new Error("Invalid Credentials");
        }

        await setSession({ name: user.name, email: user.email, id: user.id })

    } catch (error) {
        console.error("LOGIN ERROR:", error);
        throw error;
    }
    redirect("/contact");
};

export const LogoutAction = async () => {
    await deleteSession();
    redirect("/login")
}