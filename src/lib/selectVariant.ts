import type { ResumeData, RenderableResume, Bullet } from "./resume"


export function selectVariant(
    master: ResumeData,
    variantId: string, 
): RenderableResume | null {

    const variant = master.targets[variantId];
    if (!variant) return null;

    const leadSet = new Set(variant.lead_tags);

    const score = (bullet: Bullet): number => {
        (bullet.tags ?? []).filter((tag) => leadSet.has(tag)).length;
    };
}