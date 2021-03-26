# BuyAndSell
# 03-25-2021 Luis Roman - Enhanced and adjusted bubbles with coloring and description tag (https://about.me/luis-roman)

input AtrMult = 1.0;
input nATR = 4;
input AvgType = AverageType.HULL;
input PaintBars = yes;
input n = 0;
def n1  = n + 1;
def ATR = MovingAverage(AvgType, TrueRange(high, close, low), nATR);
def UP = HL2 + (AtrMult * ATR);
def DN = HL2 + (-AtrMult * ATR);
def ST = if close < ST[1] then UP else DN;
plot SuperTrend = ST;
SuperTrend.AssignValueColor(if close < ST then Color.RED else Color.GREEN);
AssignPriceColor(if PaintBars and close < ST
                 then Color.RED
                 else if PaintBars and close > ST
                      then Color.GREEN
                      else Color.CURRENT);

AddChartBubble(close[n] crosses below ST[n], low[n+1] + TickSize() * n, "Sell @ " + low[n1], color.Cyan, yes);
AddChartBubble(close[n] crosses above ST[n], high[n+1] - TickSize() * n, "Buy @ " + high[n1], color.Yellow, no);

# End Code SuperTrend
