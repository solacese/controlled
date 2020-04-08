/**
 * SempClient
 * https://docs.solace.com/API-Developer-Online-Ref-Documentation/swagger-ui/action/index.html
 * @author Andrew Roberts
 */

import { makeRequest } from "./http-client";

export async function startReplay({
  brokerIp,
  port,
  messageVpn,
  sempUsername,
  sempPassword,
  replayQueue
}) {
  // form SEMP base path
  let baseUrl = `http://${brokerIp}:${port}/SEMP/v2/action/msgVpns/${messageVpn}`;

  const msgVpnQueueStartReplayConfig = {
    fromTime: 0,
    replayLogName: replayQueue
  };

  const putRequestConfig = {
    baseUrl: baseUrl,
    basicAuthUsername: sempUsername,
    basicAuthPassword: sempPassword,
    body: {
      ...msgVpnQueueStartReplayConfig
    },
    endpoint: `/queues/${replayQueue}/startReplay`,
    method: "PUT"
  };

  try {
    console.log(`Starting replay on queue "${replayQueue}"...`);
    let res = await makeRequest(putRequestConfig);
    return res["data"];
  } catch (err) {
    console.error(err);
    return false;
  }
}
