export interface RectangleFinderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
