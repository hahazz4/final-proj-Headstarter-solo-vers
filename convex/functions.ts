import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listPrompts = query({
    handler: async (context) => {
        const userIdentity = await context.auth.getUserIdentity();
        
        if (!userIdentity)
            throw new Error("User not authenticated!");

        return await context.db.query("prompts").filter((q) => q.eq(q.field("userID"), userIdentity.tokenIdentifier)).collect();
    },
});

export const createPrompt = mutation({
    args: {
        title: v.string(),
        prompt: v.string(),
    },
    handler: async (context, args) => {
        const userIdentity = await context.auth.getUserIdentity();

        if (!userIdentity)
            throw new Error("User not authenticated!");
        
        await context.db.insert("prompts", {
            title: args.title,
            prompt: args.prompt,
            userID: userIdentity.tokenIdentifier,
        });
    },
});

export const deletePrompt = mutation({
    args: {
        id: v.id("prompts"),
    },
    handler: async (context, args) => {
        const userIdentity = await context.auth.getUserIdentity();

        if (!userIdentity)
            throw new Error("User not authenticated!");

        await context.db.delete(args.id);
    },
});

export const updatePrompt = mutation({
    args: {
        id: v.id("prompts"),
        title: v.string(),
        prompt: v.string(),
    },
    handler: async (context, args) => {
        const userIdentity = await context.auth.getUserIdentity();
        
        if (!userIdentity)
            throw new Error("User not authenticated!");

        await context.db.patch(args.id, {
            title: args.title,
            prompt: args.prompt,
        });
    },
});