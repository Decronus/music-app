import PlaylistItem from "./playlist-item";
import styled from "styled-components";
import { useFavAllQuery, useGetSelectionQuery } from "../tracks-api";

const StyledContentPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const ContentPlaylist = ({
    authorFilterList,
    genreFilterList,
    allData,
    setCurrentTrack,
    newToOldFilter,
}) => {
    const { data: favData } = useFavAllQuery();

    const { data: selectionData } = useGetSelectionQuery();

    const currentSelectionId = () => {
        switch (window.location.pathname) {
            case "/comp/classic":
                return 0;
            case "/comp/electro":
                return 1;
            case "/comp/rock":
                return 2;
            default:
                return 0;
        }
    };

    const secInMinSec = (sec) => {
        const minutes = Math.floor(sec / 60);
        let seconds = sec - minutes * 60;
        if (seconds < 10) seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    };

    const deleteSymbols = (str) => {
        if (str === null) return;
        return str.replaceAll("-", "");
    };

    let dataList = [];
    const filteredData = () => {
        if (allData) {
            dataList = [...allData];
            if (newToOldFilter) {
                dataList = dataList?.sort(
                    (prev, next) =>
                        deleteSymbols(next.release_date) -
                        deleteSymbols(prev.release_date)
                );
                return dataList;
            } else if (!newToOldFilter) {
                dataList = dataList?.sort(
                    (prev, next) =>
                        deleteSymbols(prev.release_date) -
                        deleteSymbols(next.release_date)
                );
                return dataList;
            }
        }
    };

    if (window.location.pathname === "/" || window.location.pathname === "")
        return (
            <StyledContentPlaylist>
                {filteredData()?.length > 0 ? (
                    filteredData()
                        ?.filter((el) => {
                            return (
                                authorFilterList.includes(el.author) ||
                                authorFilterList.length === 0
                            );
                        })
                        .filter((el) => {
                            return (
                                genreFilterList.includes(el.genre) ||
                                genreFilterList.length === 0
                            );
                        }).length > 0 ? (
                        filteredData()
                            ?.filter((el) => {
                                return (
                                    authorFilterList.includes(el.author) ||
                                    authorFilterList.length === 0
                                );
                            })
                            .filter((el) => {
                                return (
                                    genreFilterList.includes(el.genre) ||
                                    genreFilterList.length === 0
                                );
                            })
                            .map((track) => {
                                return (
                                    <PlaylistItem
                                        id={track.id}
                                        key={track.id}
                                        trackName={track.name}
                                        author={track.author}
                                        album={track.album}
                                        time={secInMinSec(
                                            track.duration_in_seconds
                                        )}
                                        trackLink={track.track_file}
                                        setCurrentTrack={setCurrentTrack}
                                    />
                                );
                            })
                    ) : (
                        <p>
                            Ничего не найдено. Попробуйте изменить поисковые
                            фильтры.
                        </p>
                    )
                ) : (
                    <p>Загрузка</p>
                )}
            </StyledContentPlaylist>
        );

    if (window.location.pathname === "/my-tracks")
        return (
            <StyledContentPlaylist>
                {favData?.map((track) => {
                    return (
                        <PlaylistItem
                            id={track.id}
                            key={track.id}
                            trackName={track.name}
                            author={track.author}
                            album={track.album}
                            time={secInMinSec(track.duration_in_seconds)}
                            trackLink={track.track_file}
                        />
                    );
                })}
            </StyledContentPlaylist>
        );

    if (window.location.pathname.slice(0, 6) === "/comp/")
        return (
            <StyledContentPlaylist>
                {selectionData?.[currentSelectionId()].items.map((track) => {
                    return (
                        <PlaylistItem
                            id={track.id}
                            key={track.id}
                            trackName={track.name}
                            author={track.author}
                            album={track.album}
                            time={secInMinSec(track.duration_in_seconds)}
                            trackLink={track.track_file}
                        />
                    );
                })}
            </StyledContentPlaylist>
        );
};

export default ContentPlaylist;
