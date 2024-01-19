namespace CBE;

entity Item {
    key itemno              : Integer @Common.Label: 'Item No.';
        itemname            : String  @Common.Label: 'Items Desc';
        indent              : String  @Common.Label: 'Indent';
        client              : String  @Common.Label: 'Client';
        project             : String  @Common.Label: 'Project';
        capacity_each       : String  @Common.Label: 'Capacity each(Cu mtr)';
        dia_mm              : String  @Common.Label: 'Dia mm';
        tl_to_tl_length     : String  @Common.Label: 'TL to TL length';
        moc                 : String  @Common.Label: 'MOC';
        design_pressure_bar : String  @Common.Label: 'Design Pressure bar';
        weights             : String  @Common.Label: 'Weights(kgs)';
        quantity            : String  @Common.Label: 'Qty No.';
        supplier_rel        : Association to many Supplier
                                  on supplier_rel.itemno = itemno;
}

//test
entity Supplier {
    key supplier_no          : Integer;
        itemno               : Integer;
        supplier_name        : String @Common.Label: 'Supplier';
        supplier_location    : String @Common.Label: 'Location';
        PriceBasic           : String @Common.Label: 'Price Basic';
        point_of_delivery    : String @Common.Label: 'Point of Delivery';
        delivery_period      : String @Common.Label: 'Delivery Period';
        payment_terms        : String @Common.Label: 'Payment Terms';
        liquidated_damages   : String @Common.Label: 'Liquidated Damages';
        warranty             : String @Common.Label: 'Warranty / Defect Liability Period';
        CPBG                 : String @Common.Label: 'CPBG';
        contact_person       : String @Common.Label: 'Contact Person';
        contact_no           : String @Common.Label: 'Contact No.';
        order_given_to       : String @Common.Label: 'Order can be given to……...';
        techncially_approved : String @Common.Label: 'Techncially Approved';
        approved_vendor      : String @Common.Label: 'Approved Vendor';
        supoffer_rel         : Association to many Supp_offer
                                   on supoffer_rel.supplier_no = supplier_no;

}

entity Supp_offer {
    key id                             : String;
    key supplier_no                    : Integer;
        offers                         : String  @Common.Label: 'Offers';
        unit_rate                      : Integer @Common.Label: 'Unit Rate(INR)';
        unit_rate_per_kg               : Integer @Common.Label: 'Unit Rate/Kg';
        total_amount                   : Integer @Common.Label: 'Total Amount(INR)';
        other_fare                     : Integer @Common.Label: 'Spares for 2 Years operation';
        grand_total                    : Integer @Common.Label: 'Grand Total';
        packing_mff                    : String  @Common.Label: 'Packing, Marking, Forwarding & Freight';
        inspec_testing_charges         : String  @Common.Label: 'Inspection / Testing Charges';
        // inspec_amount not added
        doc_charges                    : String  @Common.Label: 'Documentation Charges';
        quant_ref                      : String  @Common.Label: 'Qtn. Ref';
        date_offer                     : String  @Common.Label: 'Date';
        validity                       : String  @Common.Label: 'Validity';
        total_basic_price              : String  @Common.Label: 'Total Basic Price including packing, marking & forwarding';
        rnod                           : String  @Common.Label: 'RNOD';
        custom_duty                    : String  @Common.Label: 'Custom Duty & Cess';
        sgst                           : String  @Common.Label: 'SGST';
        igst_per                       : String  @Common.Label: 'IGST PERCENTAGE';
        igst_amount                    : Integer @Common.Label: 'IGST AMOUNT';
        UGST                           : String  @Common.Label: 'UGST';
        shipment_charges               : String  @Common.Label: 'Shipment charges from EXW to ISRO Mahendragiri ';
        // L/S
        total_basic_price_include_tax  : Integer @Common.Label: 'Total Basic Price including packing, marking & forwarding, Transportation including Taxes';
        total_basic_price_include_tax2 : Integer @Common.Label: 'Total Basic Price including packing, marking & forwarding, Transportation including Taxes';
        Spares_two_years               : String  @Common.Label: 'Spares for 2 Years operation';
        Per_diem_rate                  : Integer @Common.Label: 'Per Diem rate for Supervision for Erection and commissioning';
}
