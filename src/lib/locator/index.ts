export class ServiceLocator {
	// private readonly listServices: Record<string, any>
	constructor(private readonly listServices: Record<any, any>) {}

	public register<T>(name: string, service: T) {
		this.listServices[name] = service;
	}

	public get<T>(name: string): T {
		const service: T = this.listServices[name];

		if (!service) throw new Error(`Service ${name} not found`);

		return service;
	}
}
