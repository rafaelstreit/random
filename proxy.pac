function FindProxyForURL(url, host) {
    // If the dns matches, send direct.
    if (dnsDomainIs(host, "ccstore-dev-zd8a.oracleoutsourcing.com"))
        return "PROXY 127.0.0.1:8001";
     
    // DEFAULT RULE:
    return "DIRECT";
}
