import { Mutation, Query, Router } from "nestjs-trpc";
import z from "zod";

@Router()
export class serverRouter {
    @Query()
    async hello() {
        return "Hello World!";
    }

    @Mutation({input:z.object({a:z.number(), b:z.number()})})
    async addNumbers(a: number, b: number) {
        return a + b;
    }

    @Query({input: z.object({id:z.string()})})
    async getUserById(id: string) {
        // Simulate fetching user data from a database
        const users = [
            { id: "1", name: "Alice" },
            { id: "2", name: "Bob" },
            { id: "3", name: "Charlie" },
        ];
        return users.find((user) => user.id === id) || null;
    }
}