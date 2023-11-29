import { useState, FormEvent } from "react";
import { Input, Button } from "@nextui-org/react";

interface SignupFormProps {
    onAuthenticate: (credentials: {}) => void;
}

interface UserCredentials {
    userEmail: string;
    userPassword: string;
    userFirstName: string;
    userLastName: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ onAuthenticate }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");

    const handleRegistration = async (credentials: UserCredentials) => {
        const registrationData = new FormData();
        registrationData.append('email', credentials.userEmail);
        registrationData.append('password', credentials.userPassword);
        registrationData.append('firstName', credentials.userFirstName);
        registrationData.append('lastName', credentials.userLastName);

        const serverResponse = await fetch(import.meta.env["VITE_BACKEND_URI"] + "/register", {
            method: "POST",
            body: registrationData,
        });

        if (serverResponse.ok) {
            console.log("Registration successful");
            onAuthenticate(await serverResponse.json());
        } else {
            console.error("Registration failed");
        }
    };

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        const credentials = {
            userEmail: userEmail,
            userFirstName: userFirstName,
            userLastName: userLastName,
            userPassword: userPassword,
        };

        handleRegistration(credentials);
    };

    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <Input
                isRequired
                type="email"
                label="Email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                className="max-w-xs"
            />
            <Input
                isRequired
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                type="password"
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
                className="max-w-xs"
            />
            <Input
                isRequired
                label="First Name"
                value={userFirstName}
                onChange={(event) => setUserFirstName(event.target.value)}
                className="max-w-xs"
            />
            <Input
                isRequired
                label="Last Name"
                value={userLastName}
                onChange={(event) => setUserLastName(event.target.value)}
                className="max-w-xs"
            />
            <Button color="primary" type="submit" fullWidth>
                Sign Up
            </Button>
        </form>
    );
};

export default SignupForm;
