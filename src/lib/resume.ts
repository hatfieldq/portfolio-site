import resumeData from "@/data/resume-master.json"

// All bullets
export interface Bullet {
    text: string;
    tags?: string[];
}

// Job entry and doubles as school entry
export interface Job {
    id: string;
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights: Bullet[];
}

export interface Education {
    institution: string;
    area: string;
    startDate: string;
    endDate?: string;
    gpa: string;
    honors: string;
    highlights: Bullet[];
}

// Allowed project states
type ProjectStatus = "active" | "in-progress" | "planned" | "unknown";


// Project entry
export interface Project {
    id: string;
    name: string;
    url?: string;
    context?: string;
    description: string;
    tags?: string[];
    status: ProjectStatus;
}

// Skills data sorted by topic
export interface SkillGroup {
    label: string;
    items: string[];
    tags?: string[];
}

// Profiles 
export interface Profile {
    network: string;
    url: string;
}

// Resume basics
export interface Basics {
    name: string;
    label: string;
    clearance: string;
    email: string;
    phone: string;
    url: string;
    profiles: Profile[];
    summary: string;
    
}

// Options to change the variant of the target
export interface TargetVariant {
    company: string;
    role: string;
    priority: string;
    lead_tags: string[];
    notes: string;

}

// Full resume interface for export
export interface Resume {
    basics: Basics;
    education: Education[];
    work: Job[];
    projects: Project[];
    skills: Record<string, SkillGroup>;
    targets: Record<string, TargetVariant>;
}

export const resume = resumeData as Resume;