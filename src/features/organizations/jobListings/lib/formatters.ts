import {
  experienceLevel,
  jobListingStatus,
  jobListingType,
  locationRequirement,
  wageInterval,
} from "@/drizzle/schema";

export function formatWageInterval(interval: wageInterval) {
  switch (interval) {
    case "hourly":
      return "Hour";
    case "yearly":
      return "Year";
    default:
      throw new Error(`Invalid wage interval: ${interval satisfies never}`);
  }
}

export function formatLocationRequirement(
  locationRequirement: locationRequirement
) {
  switch (locationRequirement) {
    case "remote":
      return "Remote";
    case "in-office":
      return "In Office";
    case "hybrid":
      return "Hybrid";
    default:
      throw new Error(
        `Unknown location requirement: ${locationRequirement satisfies never}`
      );
  }
}

export function formatExperienceLevel(experienceLevel: experienceLevel) {
  switch (experienceLevel) {
    case "junior":
      return "Junior";
    case "mid-level":
      return "Mid Level";
    case "senior":
      return "Senior";
    default:
      throw new Error(
        `Unknown experience level: ${experienceLevel satisfies never}`
      );
  }
}

export function formatJobType(type: jobListingType) {
  switch (type) {
    case "full-time":
      return "Full Time";
    case "part-time":
      return "Part Time";
    case "internship":
      return "Internship";
    default:
      throw new Error(`Unknown job type: ${type satisfies never}`);
  }
}

export function formatJobListingStatus(status: jobListingStatus) {
  switch (status) {
    case "published":
      return "Active";
    case "draft":
      return "Draft";
    case "delisted":
      return "Delisted";
    default:
      throw new Error(`Unknown status: ${status satisfies never}`);
  }
}

export function formatWage(wage: number, wageInterval: wageInterval) {
  const wageFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  switch (wageInterval) {
    case "hourly": {
      return `${wageFormatter.format(wage)} / hr`;
    }
    case "yearly": {
      return wageFormatter.format(wage);
    }
    default:
      throw new Error(`Unknown wage interval: ${wageInterval satisfies never}`);
  }
}

export function formatJobListingLocation({
  stateAbbreviation,
  city,
}: {
  stateAbbreviation: string | null;
  city: string | null;
}) {
  if (stateAbbreviation == null && city == null) return "None";

  const locationParts = [];
  if (city != null) locationParts.push(city);
  if (stateAbbreviation != null) {
    locationParts.push(stateAbbreviation.toUpperCase());
  }

  return locationParts.join(", ");
}
