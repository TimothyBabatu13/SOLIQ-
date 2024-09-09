import SOLIQCard from "./SOLIQCard"

const SOLIQCards = () => {
  return (
    <div>
        <SOLIQCard 
            title={'User-Friendly'} 
            text={'Easy to use—initiate trading with a simple message.'}
        />
         <SOLIQCard 
            title={'Fast Trading'} 
            text={'Execute buy and sell orders with one click, with blockchain confirmation in seconds.'}
        />
         <SOLIQCard 
            title={'Profit-Loss Visuals'} 
            text={'Visualize trades, simplify analysis, and share your trades on social media.'}
        />
           <SOLIQCard 
            title={'Anti-MEV'} 
            text={'Ensure privacy and avoid fee losses while trading'}
        />
           <SOLIQCard 
            title={'Limit Orders'} 
            text={'Auto-execute trades at set prices—no need for constant monitoring.'}
        />
    </div>
  )
}

export default SOLIQCards