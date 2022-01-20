const {httpPost} = require('./httpPost')
const { tili } = require('./tili')

const datas = 
[
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
  "z=64w4q5lrocyeNo1jsFKAzEQht8l0L1ol0y6m6ZCDrIK9dD2IHrwIpPN2AbW7JCsKyp9d1PBOfzwffPDzI94%2f85HcSP8aO99mJ4ypR3y44RHytVsW9NAxSdmext9GoO%2fwGBftq%2fdvuK5t01tallDuzFNYWeVVLAEtVTqCtaLFQKUULqi2KcvnmxLTqvek145AFlGr%2bGtdRuUBrVTTlyL%2f%2ft3NGEYHnz5DhpTFiHvMH7gUIQsyDPv6fOZUg5jvJSKOzDFDpPvToH%2f1PkXn9RD2w%3d%3d&b=8b8a467854d39191d3eebc0e402574a4",
]

const options = {
  host: 'x38.mysticalcard.com',
  path: '/mapstage.php',
  method: 'POST',
  headers: {
    "Cookie": "_sid=15e7qspekcgpcl51dandrgish1",
    "User-Agent": "UnityPlayer/2019.4.13f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",
    "Accept": "application/json",
    "Accept-Encoding": "deflate, gzip",
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Unity-Version": "2019.4.13f1",
    // 'Content-Length': Buffer.byteLength(data)
  }
}
let n = 0
const run = () => {
  let t = 0
  const promises = []
  datas.forEach((d, i) => {
    n++
    options.headers['Content-Length'] = Buffer.byteLength(d)
    promises.push(httpPost(options, d, i, t++))
    console.log('n' ,n)
  })
  // if (n > 750) {
  //   return;
  // }
  Promise.all(promises).then((resps) => {
    if (resps.every(r => r < 1000)) {
      // tili().then(run)
      return;
    } 
    run()
  })
}

run();