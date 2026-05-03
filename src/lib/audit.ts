import pool from "@/lib/db";

interface AuditParams {
  action: string;
  entity: string;
  entity_id?: string;
  actor_id?: string;
  details?: Record<string, unknown>;
  ip_address?: string;
}

export async function auditLog(params: AuditParams) {
  try {
    await pool.query(
      `INSERT INTO logs.audit_logs (action, entity, entity_id, actor_id, details, ip_address)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        params.action,
        params.entity,
        params.entity_id ?? null,
        params.actor_id ?? null,
        params.details ? JSON.stringify(params.details) : null,
        params.ip_address ?? null,
      ]
    );
  } catch (err) {
    console.error("[audit] failed to write log:", err);
  }
}
