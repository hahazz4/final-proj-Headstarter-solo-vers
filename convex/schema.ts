import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    prompts: defineTable({
        title: v.string(),
        prompt: v.string()
    })
})
