import instance from "~/lib/axios"

export const register = async () => {
    const response = await instance.post("/register")
    console.log(response)
}

