---
title: "AES Encryption Engine"
tile: "/img/tvla.png"
hiddenInHomeList: true
start: 2022-05-01
end: 2025-03-01
subtitle: "Graduate Research"
kind: "research"
---

{{< subtitle >}}
{{< daterange >}}

{{< carousel
    "/img/sbox.png|The SBox – the most important component of the AES algorithm.|65%"
    "/img/tvla.png|TVLA setup for AES SBoxes using the CW305 with Artix FPGA Target.|65%"
>}}

I worked on creating of an open-source, Advanced Encryption Standard (AES) engine for Sandia National Laboratory. My focus was on the AES SBox, the most important step of the AES algorithm. This included implementing multiple designs using Verilog with different levels of countermeasures (masking, thresholding) to be realized on an ASIC prototype. I also studied the different trade-offs (performance, security, area, power) based on state-of-the art implementations to better understand the properties of cryptographic ASICs.

Work supported by [Sandia National Laboratory](https://www.sandia.gov/).