import type { ResumeData, RenderableResume, Bullet } from "./resume"


export function selectVariant(
    master: ResumeData,
    variantId: string, 
): RenderableResume | null {

    const variant = master.targets[variantId];
    if (!variant) return null;

    const leadSet = new Set(variant.lead_tags);

    const score = (bullet: Bullet): number => 
        (bullet.tags ?? []).filter((tag) => leadSet.has(tag)).length;


    const work = master.work.map((job) => ({
        ...job, 
        highlights: [...job.highlights]
            .filter((b) => !b.excluded)
            .sort((a,b) => score(b) - score(a)), 
    }));

    const projects = master.projects.filter(
        (p) => !p.excluded && p.status !== "planned",
    );

    const summary = variant.summary ?? master.basics.summary;

    const { targets: _targets, ...rest } = master;
    return { ...rest, basics: { ...master.basics, summary }, work, projects };

}