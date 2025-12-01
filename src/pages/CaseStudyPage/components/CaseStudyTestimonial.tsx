import { TestimonialCard } from "../../../components/ui/Cards";

export default function CaseStudyTestimonial(testimonial: {
  name: string;
  position?: string;
  company?: string;
  text: string;
}) {
  return (
    <section className="my-container side-padding pb-10 sm:pb-20 pt-20 sm:pt-40">
      <TestimonialCard {...testimonial} />
    </section>
  );
}
