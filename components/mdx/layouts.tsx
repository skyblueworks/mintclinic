import { Box, Prose, type ResponsiveValue } from "@/components/craft";
import { cn } from "@/components/craft";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16>;
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
  gap?: ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16>;
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
export function TwoColumn({
  children,
  className,
  gap = { base: 8, lg: 16 },
}: LayoutProps) {
  return (
    <Box
      cols={{ base: 1, md: 2 }}
      gap={gap}
      className={cn("my-8 items-start", className)}
    >
      {children}
    </Box>
  );
}

/**
 * CardGrid - Responsive grid layout for N number of card items
 * Stacks: 1 column on mobile → 2 columns on tablet → 3 columns on desktop
 *
 * Supports any number of items - automatically flows into grid
 *
 * @example
 * <CardGrid>
 *   <Card>
 *     ### Feature One
 *     Description text
 *   </Card>
 *   <Card>...</Card>
 *   <Card>...</Card>
 *   <Card>...</Card>
 * </CardGrid>
 */
export function CardGrid({
  children,
  className,
  gap = { base: 6, lg: 16 },
}: LayoutProps) {
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

// Backwards compatibility alias
export const ThreeColumn = CardGrid;

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
 * Card - Clean card component for feature boxes
 * Perfect for displaying features, services, or information blocks
 * Features teal headings and light background for optimal readability
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
        "rounded-2xl rounded-bl-none rounded-tr-none border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md",
        "[&_h3]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-primary",
        "[&_p]:leading-relaxed [&_p]:text-muted-foreground",
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
  gap = { base: 6, lg: 16 },
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
      <Box
        cols={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: 8, md: 16 }}
        className="!gap-y-4"
      >
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex min-h-[2.5rem] items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">
                {index + 1}.
              </span>
              <h3 className="text-xl font-semibold text-primary">
                {step.title}
              </h3>
            </div>
            <p className="leading-7">{step.description}</p>
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
 *   src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
 *   title="Dental Procedure Video"
 * />
 */
export function Video({ src, title = "Video", className }: VideoProps) {
  return (
    <div className={cn("my-8", className)}>
      <div className="aspect-video overflow-hidden rounded-3xl rounded-bl-none rounded-tr-none shadow-xl shadow-primary/10">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
