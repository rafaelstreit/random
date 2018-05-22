function FindProxyForURL(url, host) {
    // If the dns matches, send direct.
    if (dnsDomainIs(host, "ccstore-dev-zd8a.oracleoutsourcing.com"))
        return "PROXY 172.16.2.33:8001";
     
    // DEFAULT RULE:
    return "DIRECT";
}
