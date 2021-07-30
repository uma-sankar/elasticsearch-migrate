import type { Client } from '@elastic/elasticsearch';

export interface MigrationConfig {
  /**
   * Name of the index in which the migrations
   * have to be stored
   */
  indexName: string;
  /**
   * Relative path to the directory in which migration
   * files are present
   */
  directory: string;
  /**
   * Elasticsearch Node.js client instance
   */
  client: Client;
  /**
   * Timeout to wait until the migration
   * lock is released.
   * Default: 60000
   */
  migrationLockTimeout?: number;
}

export declare function runMigrations(config: MigrationConfig): Promise<void>;
