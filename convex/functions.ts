import { query } from "./_generated/server"

export const listPrompts = query({
    handler: async (context) => {
        return await context.db.query("prompts").collect();
    }
})
