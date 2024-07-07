import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { PRIMARY } from "../../constant";

type OfferLabel = {
  label: string;
  title: string;
};

interface PassBtnInterface {
  data: any;
  variant: string;
  onClick: () => void;
  days?: string;
  offerLabel?: OfferLabel;
}

const PassBtn = ({
  data,
  onClick,
  offerLabel,
  days = "",
  variant = PRIMARY,
}: PassBtnInterface) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        borderRadius: "6px",
        border: `1px solid ${variant === PRIMARY ? "#FFC422" : "#EEE7E7"}`,
        backgroundColor: variant === PRIMARY ? "#FFCF4B" : "#F9F9F9",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        p: "8px",
        pl: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box>
        <Typography
          component="p"
          fontWeight="500"
          fontSize="14px"
          mb="8px"
          color="#65624C"
        >
          Bulk Pass
        </Typography>
        <Typography component="p" fontWeight="600" noWrap>
          ₹ {data?.day_pass_price * (days? Number(days) : 1)}
          <Typography component="span" fontWeight="500" fontSize="12px">
            / {days} Day
          </Typography>
        </Typography>
      </Box>
      <Box>
        <img src="/images/icons/right3arrow.png" width={36} />
      </Box>
      {offerLabel && (
        <Typography
          title={offerLabel.title}
          sx={{
            position: "absolute",
            fontSize: "8px",
            fontWeight: "500",
            lineHeight: "10px",
            px: "8px",
            py: "4px",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#263238",
            color: "#FFFDF7",
            borderRadius: "3px",
          }}
        >
          {offerLabel.label}
        </Typography>
      )}
    </Box>
  );
};

export default PassBtn;
