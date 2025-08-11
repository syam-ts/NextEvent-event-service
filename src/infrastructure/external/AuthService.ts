import axios from "axios";

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || "..";

export async function verifyToken(token: string) {
    const res = await axios.get(`${AUTH_SERVICE_URL}/verify`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    return res.data;
}
