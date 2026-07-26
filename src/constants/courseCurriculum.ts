export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  description: string;
}

export interface CoursePackage {
  id: number;
  name: "BASIC" | "ADVANCE" | "PRO";
  modules: CourseModule[];
}

export interface CourseCurriculum {
  slug: string;
  brochureUrl: string;
  packages: CoursePackage[];
}

export const courseCurriculum: CourseCurriculum[] = [
  {
    slug: "java-full-stack",
    brochureUrl: "/brochures/java-full-stack.pdf",

    packages: [
      {
        id: 1,
        name: "BASIC",
        modules: [
          {
            id: 1,
            title: "Core Java",
            duration: "2 Weeks",
            description:
              "Java syntax, variables, loops, OOP, collections and exception handling."
          },
          {
            id: 2,
            title: "SQL",
            duration: "1 Week",
            description:
              "Database fundamentals, joins, queries and normalization."
          }
        ]
      },

      {
        id: 2,
        name: "ADVANCE",
        modules: [
          {
            id: 3,
            title: "Spring Boot",
            duration: "3 Weeks",
            description:
              "REST APIs, dependency injection, Spring MVC."
          },
          {
            id: 4,
            title: "Hibernate",
            duration: "2 Weeks",
            description:
              "ORM, relationships, JPQL and transactions."
          }
        ]
      },

      {
        id: 3,
        name: "PRO",
        modules: [
          {
            id: 5,
            title: "Docker",
            duration: "1 Week",
            description:
              "Containers, Dockerfiles and Docker Compose."
          },
          {
            id: 6,
            title: "AWS",
            duration: "2 Weeks",
            description:
              "EC2, S3, IAM and deployment."
          }
        ]
      }
    ]
  }
];