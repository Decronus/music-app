import * as S from ".//styled-components/styled-search";
import { useThemeContext, themes } from "./context";

const Search = () => {
    const { theme } = useThemeContext();
    return (
        <S.CenterblockSearch
            style={{ borderBottom: theme.centerblockSearchBorderBottom }}
        >
            <S.SearchSvg>
                {theme === themes.dark ? (
                    <use href="img/icon/sprite.svg#icon-search"></use>
                ) : (
                    <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.9277 12.7744L15.3701 17.064"
                            stroke="black"
                            strokeLinecap="round"
                        />
                        <circle
                            cx="8.48509"
                            cy="8.48477"
                            r="5.5"
                            transform="rotate(-38.7469 8.48509 8.48477)"
                            stroke="black"
                        />
                    </svg>
                )}
            </S.SearchSvg>
            <S.SearchText
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
                style={{ color: theme.searchTextColor }}
                placeholderColor={theme.placeholderColor}
            />
        </S.CenterblockSearch>
    );
};

export default Search;
