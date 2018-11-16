function FindProxyForURL(url, host) {
    // If the dns matches, send direct.
    if (dnsDomainIs(host, "shop-test2.motorolasolutions.com"))
        return "PROXY 172.16.5.57:8001";
     
    // DEFAULT RULE:
    return "DIRECT";
}
