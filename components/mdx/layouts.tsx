import { Box, Prose } from "@/components/craft";
import { cn } from "@/components/craft";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
}

interface ColumnProps {
  children: React.ReactNode;
  className?: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface GridProps {
  children: React.ReactNode;
  className?: string;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  cols?: {
    base?: 1 | 2 | 3 | 4;
    sm?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
    xl?: 1 | 2 | 3 | 4;
  };
}
interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessProps {
  title?: string;
  steps: ProcessStep[];
  className?: string;
}

interface VideoProps {
  src: string;
  title?: string;
  className?: string;
}

/**
 * TwoColumn - Responsive 2-column layout
 * Stacks to 1 column on mobile, 2 columns on tablet and up
 *
 * @example
 * <TwoColumn>
 *   <Column>
 *     ![Image](path/to/image.jpg)
 *   </Column>
 *   <Column>
 *     ## Heading
 *     Text content here
 *   </Column>
 * </TwoColumn>
 */
export function TwoColumn({ children, className, gap = 8 }: LayoutProps) {
  return (
    <Box
      cols={{ base: 1, md: 2 }}
      gap={gap}
      className={cn("my-8 items-center", className)}
    >
      {children}
    </Box>
  );
}

/**
 * ThreeColumn - Responsive 3-column layout
 * Stacks: 1 column on mobile → 2 columns on tablet → 3 columns on desktop
 *
 * @example
 * <ThreeColumn>
 *   <Card>
 *     ### Feature One
 *     Description text
 *   </Card>
 *   <Card>...</Card>
 *   <Card>...</Card>
 * </ThreeColumn>
 */
export function ThreeColumn({ children, className, gap = 6 }: LayoutProps) {
  return (
    <Box
      cols={{ base: 1, md: 2, lg: 3 }}
      gap={gap}
      className={cn("my-8", className)}
    >
      {children}
    </Box>
  );
}

/**
 * Column - Individual column wrapper for layout components
 * Use inside TwoColumn, ThreeColumn, or Grid components
 *
 * @example
 * <Column>
 *   Content here
 * </Column>
 */
export function Column({ children, className }: ColumnProps) {
  return <Prose className={className}>{children}</Prose>;
}

/**
 * Card - Bordered card component for feature boxes
 * Perfect for displaying features, services, or information blocks
 *
 * @example
 * <Card>
 *   ### Feature Title
 *   Feature description
 * </Card>
 */
export function Card({ children, className }: CardProps) {
  return (
    <Prose
      className={cn(
        "rounded-2xl rounded-bl-none rounded-tr-none border border-primary/5 bg-gradient-to-br from-primary/5 to-primary/10 p-6 shadow-2xl shadow-primary/5",
        className,
      )}
    >
      {children}
    </Prose>
  );
}

/**
 * Grid - Flexible responsive grid layout
 * Customize column counts at different breakpoints
 *
 * @example
 * <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   <div>Item 4</div>
 * </Grid>
 */
export function Grid({
  children,
  className,
  gap = 6,
  cols = { base: 1, md: 2, lg: 3 },
}: GridProps) {
  return (
    <Box cols={cols} gap={gap} className={cn("my-8", className)}>
      {children}
    </Box>
  );
}

/**
 * Process - Step-by-step process component with numbered steps
 * Perfect for explaining procedures and workflows
 *
 * @example
 * <Process
 *   steps={[
 *     { title: "Consultation", description: "Initial assessment and planning" },
 *     { title: "Preparation", description: "Tooth preparation and impressions" },
 *     { title: "Placement", description: "Final veneer placement" }
 *   ]}
 * />
 */
export function Process({ title, steps, className }: ProcessProps) {
  return (
    <div className={cn("my-8", className)}>
      {title && (
        <h2 className="mb-8 text-3xl font-semibold text-primary">{title}</h2>
      )}
      <Box cols={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex min-h-[2.5rem] items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                {index + 1}.
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="leading-7 text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </Box>
    </div>
  );
}

/**
 * Video - Responsive video embed component
 * Supports YouTube, Vimeo, and other iframe-based video platforms
 *
 * @example
 * <Video
 *   src="https://www.youtube.com/embed/VIDEO_ID"
 *   title="Dental Procedure Video"
 * />
 */
export function Video({ src, title = "Video", className }: VideoProps) {
  return (
    <div className={cn("my-8", className)}>
      <div className="relative overflow-hidden rounded-lg pb-[56.25%]">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
