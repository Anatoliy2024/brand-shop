import InnerApp from "@/providers/InnerApp"

import { Vacancies } from "@/components/Vacancies/Vacancies"
import { SloganTwo } from "@/components/SloganTwo/SloganTwo"

export default function VacanciesPage() {
  return (
    <InnerApp>
      <Vacancies />
      <SloganTwo />
    </InnerApp>
  )
}
