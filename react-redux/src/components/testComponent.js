
export default function SummaryComponent(props) {
    const val=useSelector(s=>s.counter.value);
    return (<div>CountSelectorval: {val} </div>);
}