import { query, mutation } from "./_generated/server"
import { v } from "convex/values";

export const listPrompts = query({
    handler: async (context) => {
        return await context.db.query("prompts").collect();
    }
})

export const createPrompt = mutation({
    args: {
        title: v.string(),
        prompt: v.string()
    },
    handler: async(context, args) => {
        await context.db.insert("prompts", {
            title: args.title,
            prompt: args.prompt
        })
    }
})

export const deletePrompt = mutation({
    args: {
        id: v.id("prompts")
    },
    handler: async(context, args) => {
        await context.db.delete(args.id);
    }
})

// export const updatePrompt = mutation({
//     args: {
//         id: v.id("prompts")
//     },
//     handler: async(context, args) => {
//         await context.db.patch(args.id,{
//             title: args.title
//             prompt: args.prompt
//         });
//     }
// })
