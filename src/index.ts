import * as __Memcached from "memcached";

export class Memcached extends __Memcached {
  /**
   * Touches the given key.
   * @param key The key
   * @param lifetime After how long should the key expire measured in seconds
   * @param cb
   */
  public touch(key: string, lifetime: number) {
    return new Promise<void>((resolve, reject) => {
      super.touch(key, lifetime, function(err: any) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  /**
   * Get the value for the given key.
   * @param key The key
   * @param cb
   */
  public get<Result>(key: string) {
    return new Promise<Result>((resolve, reject) => {
      super.get(key, function(err: any, data: any) {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }

  /**
   * Get the value and the CAS id.
   * @param key The key
   * @param cb
   */
  public gets<Result>(key: string) {
    return new Promise<{ value: Result | undefined, cas: string }>((resolve, reject) => {
      super.gets(key, function(err: any, data) {
        if (err) reject(err);
        else resolve({
          value: data[key],
          cas: data.cas,
        });
      });
    });
  }

  /**
   * Retrieves a bunch of values from multiple keys.
   * @param keys all the keys that needs to be fetched
   * @param cb
   */
  public getMulti<Result>(keys: string[]) {
    if (keys.length === 0) {
      return Promise.resolve({});
    }

    return new Promise<{ [key: string]: Result }>((resolve, reject) => {
      super.getMulti(keys, function(err: any, data) {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }

  /**
   * Stores a new value in Memcached.
   *
   * @param key The key
   * @param value Either a buffer, JSON, number or string that you want to store.
   * @param lifetime
   * @param cb
   */
  public set<Result>(key: string, value: Result, lifetime: number) {
    return new Promise<boolean>((resolve, reject) => {
      super.set(key, value, lifetime, function (err: any, result: boolean) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Replaces the value in memcached.
   * @param key The key
   * @param value Either a buffer, JSON, number or string that you want to store.
   * @param lifetime
   * @param cb
   */
  public replace<Result>(key: string, value: Result, lifetime: number) {
    return new Promise<boolean>((resolve, reject) => {
      super.replace(key, value, lifetime, function (err: any, result: boolean) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Add the value, only if it's not in memcached already.
   * @param key The key
   * @param value Either a buffer, JSON, number or string that you want to store.
   * @param lifetime
   * @param cb
   */
  public add<Result>(key: string, value: Result, lifetime: number) {
    return new Promise<boolean>((resolve, reject) => {
      super.add(key, value, lifetime, function (err: any, result: boolean) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Add the value, only if it matches the given CAS value.
   * @param key The key
   * @param value Either a buffer, JSON, number or string that you want to store.
   * @param cas
   * @param lifetime
   * @param cb
   */
  public cas<Result>(key: string, value: Result, cas: string, lifetime: number) {
    return new Promise<boolean>((resolve, reject) => {
      super.cas(key, value, cas, lifetime, function (err: any, result: boolean) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Add the given value string to the value of an existing item.
   * @param key The key
   * @param value Either a buffer, JSON, number or string that you want to store.
   * @param cb
   */
  public append<Result>(key: string, value: Result) {
    return new Promise<boolean>((resolve, reject) => {
      super.append(key, value, function (err: any, result: boolean) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Add the given value string to the value of an existing item.
   * @param key The key
   * @param value Either a buffer, JSON, number or string that you want to store.
   * @param cb
   */
  public prepend<Result>(key: string, value: Result) {
    return new Promise<boolean>((resolve, reject) => {
      super.prepend(key, value, function (err: any, result: boolean) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Increment a given key.
   * @param key The key
   * @param amount The increment
   * @param cb
   */
  public incr(key: string, amount: number) {
    return new Promise<boolean | number>((resolve, reject) => {
      super.incr(key, amount, function (err: any, result: boolean | number) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Decrement a given key.
   * @param key The key
   * @param amount The decrement
   * @param cb
   */
  public decr(key: string, amount: number) {
    return new Promise<boolean | number>((resolve, reject) => {
      super.decr(key, amount, function (err: any, result: boolean | number) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Remove the key from memcached.
   * @param key The key
   * @param cb
   */
  public del(key: string) {
    return new Promise<boolean>((resolve, reject) => {
      super.del(key, function (err: any, result: boolean) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  /**
   * Retrieves the version number of your server.
   * @param cb
   */
  public version() {
    return new Promise<__Memcached.VersionData[]>((resolve, reject) => {
      super.version(function (err: any, version: __Memcached.VersionData[]) {
        if (err) reject(err);
        else resolve(version);
      });
    });
  }

  /**
   * Retrieves your stats settings.
   * @param cb
   */
  public settings() {
    return new Promise<__Memcached.StatusData[]>((resolve, reject) => {
      super.version(function (err: any, version: __Memcached.StatusData[]) {
        if (err) reject(err);
        else resolve(version);
      });
    });
  }
  /**
   * Retrieves stats from your memcached server.
   * @param cb
   */
  public stats() {
    return new Promise<__Memcached.StatusData[]>((resolve, reject) => {
      super.version(function (err: any, version: __Memcached.StatusData[]) {
        if (err) reject(err);
        else resolve(version);
      });
    });
  }
  /**
   * Retrieves stats slabs information.
   * @param cb
   */
  public slabs() {
    return new Promise<__Memcached.StatusData[]>((resolve, reject) => {
      super.version(function (err: any, version: __Memcached.StatusData[]) {
        if (err) reject(err);
        else resolve(version);
      });
    });
  }
  /**
   * Retrieves stats items information.
   * @param cb
   */
  public items() {
    return new Promise<__Memcached.StatusData[]>((resolve, reject) => {
      super.version(function (err: any, version: __Memcached.StatusData[]) {
        if (err) reject(err);
        else resolve(version);
      });
    });
  }
  /**
   * Inspect cache, see examples for a detailed explanation.
   * @param server
   * @param slabid
   * @param number
   * @param cb
   */
  public cachedump(server: string, slabid: number, number: number) {
    return new Promise<__Memcached.CacheDumpData | __Memcached.CacheDumpData[]>((resolve, reject) => {
      super.cachedump(server, slabid, number, function (err: any, cachedump: __Memcached.CacheDumpData | __Memcached.CacheDumpData[]) {
        if (err) reject(err);
        else resolve(cachedump);
      });
    });
  }

  /**
   * Flushes the memcached server.
   * @param cb
   */
  public flush(cb?: (this: undefined, err: any, results: boolean[]) => void) {
    return new Promise<boolean[]>((resolve, reject) => {
      super.flush(function (err: any, results: boolean[]) {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  /**
   * Closes all active memcached connections.
   */
  public end() {
    super.end();
  }
}

export class MemcachedFetcher {
  constructor(private memcached: Memcached) {}

  public async fetch<Result>(key: string, lifetime: number, fetcher: () => Promise<Result>): Promise<Result> {
    let value = await this.memcached.get<Result>(key);
    if (!value) {
      value = await fetcher();
      await this.memcached.set(key, value, lifetime);
    }
    return value;
  }

  public async multiFetch<Argument, Result>(
    args: Argument[],
    argToKey: (args: Argument) => string,
    lifetime: number,
    fetcher: (args: Argument[]) => Promise<Result[]>,
  ): Promise<Result[]> {
    // Memcached has multiGet bug
    if (args.length === 0) {
      return [];
    }

    const argsToKeyMap = new Map<Argument, string>(
      args.map((arg) => [arg, argToKey(arg)] as [Argument, string]));

    const cached = await (this.memcached.getMulti(Array.from(argsToKeyMap.values())) as Promise<{ [key: string]: Result }>);
    const missingArgs = args.filter((arg) => cached[argsToKeyMap.get(arg)!] === undefined);

    const fetchedArray = await fetcher(missingArgs);

    if (fetchedArray.length !== missingArgs.length) {
      throw new Error("Fetcher must return same length of result with Args.length");
    }
    const fetched = new Map<Argument, Result>(
      missingArgs.map((arg, index) => [arg, fetchedArray[index]] as [Argument, Result]));

    await Promise.all(Array.from(fetched).map(async ([arg, result]) => {
      await this.memcached.set(argsToKeyMap.get(arg)!, result, lifetime);
    }));

    return args.map((arg) => {
      const key = argsToKeyMap.get(arg)!;
      if (cached[key]) {
        return cached[key];
      } else {
        return fetched.get(arg)!;
      }
    });
  }
}