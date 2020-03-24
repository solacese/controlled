/**
 * SempClient
 * @author Andrew Roberts
 */

import { makeRequest } from "./http-client";

export async function startReplay({
  brokerIp,
  port,
  messageVpn,
  sempUri,
  sempUsername,
  sempPassword
}) {
  // form SEMP base path
  let baseUrl = "";
  if (sempUri) {
    // if cloud messaging service, allow user to enter the URL listed in the manage tab of the service
    let regex = /config/gi;
    baseUrl = `${sempUri.replace(regex, "action")}/msgVpns/${messageVpn}`;
  } else {
    baseUrl = `http://${brokerIp}:${port}/SEMP/v2/action/msgVpns/${messageVpn}`;
  }

  console.log(baseUrl);
  // const putRequestConfig = {
  //   baseUrl: baseUrl,
  //   basicAuthUsername: sempUsername,
  //   basicAuthPassword: sempPassword,
  //   body: {
  //     ...clientUsernameConfig
  //   },
  //   endpoint: "/clientUsernames",
  //   method: "POST"
  // };

  // try {
  //   console.log(`Fetching client connections in Msg VPN "${msgVpnName}"...`);
  //   let res = await makeRequest(getRequestParams);
  //   return res["data"];
  // } catch (err) {
  //   console.error(err);
  //   return false;
  // }
}
