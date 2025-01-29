import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, StarIcon, TagIcon, UserIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IExperience } from "@/lib/types/experiences";

interface ExperienceCardProps {
  experience: IExperience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={experience.image || "/placeholder.svg"}
            alt={experience.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            quality={60}
          />
          <Badge className="absolute top-2 right-2 bg-white text-black">
            {experience.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{experience.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPinIcon className="mr-2 h-4 w-4" />
          {experience.country}
        </div>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {experience.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <div className="flex items-center">
            <StarIcon className="mr-1 h-4 w-4 text-yellow-400" />
            <span>{experience.ratings.average.toFixed(1)}</span>
            <span className="ml-1">
              ({experience.ratings.totalVotes} votes)
            </span>
          </div>
          <div className="flex items-center">
            <UserIcon className="mr-1 h-4 w-4" />
            <span>{experience.votes} votes</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              <TagIcon className="mr-1 h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/all-top-experiences/${experience.id}`}>
            View Experience
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
