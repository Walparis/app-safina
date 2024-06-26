const PriceCrypto = () => {
  return (
    <div className="text-sm md:text-lg text-muted-foreground flex gap-1 dark:text-white">
      <div>Цена:</div>
      <div>
        <span>1 ETH = 3422.27 USD</span>
        <br />
        <span>1 TRX = 0.1159 USD</span>
        <br />
        <span>1 BTC = 10000.00 USD</span>
      </div>
    </div>
  );
};

export default PriceCrypto;
