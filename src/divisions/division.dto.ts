export class CreateDivisionDto {
  name: string;
  level: number;
  collaboratorsCount: number;
  ambassadorName?: string;
  parentDivisionId?: number;
}

export class UpdateDivisionDto {
  name?: string;
  level?: number;
  collaboratorsCount?: number;
  ambassadorName?: string;
  parentDivisionId?: number;
}