type Props = {
  secondsData : number,
}

function SecondsTick( props: Props) {

    const secondsToRem = () => {return -(props.secondsData * 4) + 1}

  return (
    <div className="tickContainer" style={{['--trans-value' as any] : `${secondsToRem()}rem`}}>
        <div className="HourBox"></div>
        <div className="HourBox"></div>
        <div className="HourBox">0</div>
        <div className="HourBox">1</div>
        <div className="HourBox">2</div>
        <div className="HourBox">3</div>
        <div className="HourBox">4</div>
        <div className="HourBox">5</div>
        <div className="HourBox">6</div>
        <div className="HourBox">7</div>
        <div className="HourBox">8</div>
        <div className="HourBox">9</div>
        <div className="HourBox">10</div>
        <div className="HourBox">11</div>
        <div className="HourBox">12</div>
        <div className="HourBox">13</div>
        <div className="HourBox">14</div>
        <div className="HourBox">15</div>
        <div className="HourBox">16</div>
        <div className="HourBox">17</div>
        <div className="HourBox">18</div>
        <div className="HourBox">19</div>
        <div className="HourBox">20</div>
        <div className="HourBox">21</div>
        <div className="HourBox">22</div>
        <div className="HourBox">23</div>
        <div className="HourBox">24</div>
        <div className="HourBox">25</div>
        <div className="HourBox">26</div>
        <div className="HourBox">27</div>
        <div className="HourBox">28</div>
        <div className="HourBox">29</div>
        <div className="HourBox">30</div>
        <div className="HourBox">31</div>
        <div className="HourBox">32</div>
        <div className="HourBox">33</div>
        <div className="HourBox">34</div>
        <div className="HourBox">35</div>
        <div className="HourBox">36</div>
        <div className="HourBox">37</div>
        <div className="HourBox">38</div>
        <div className="HourBox">39</div>
        <div className="HourBox">40</div>
        <div className="HourBox">41</div>
        <div className="HourBox">42</div>
        <div className="HourBox">43</div>
        <div className="HourBox">44</div>
        <div className="HourBox">45</div>
        <div className="HourBox">46</div>
        <div className="HourBox">47</div>
        <div className="HourBox">48</div>
        <div className="HourBox">49</div>
        <div className="HourBox">50</div>
        <div className="HourBox">51</div>
        <div className="HourBox">52</div>
        <div className="HourBox">53</div>
        <div className="HourBox">54</div>
        <div className="HourBox">55</div>
        <div className="HourBox">56</div>
        <div className="HourBox">57</div>
        <div className="HourBox">58</div>
        <div className="HourBox">59</div>
        <div className="HourBox"></div>
        <div className="HourBox"></div>
    </div>
  )
}

export default SecondsTick